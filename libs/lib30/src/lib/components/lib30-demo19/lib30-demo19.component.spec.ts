import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo19Component } from './lib30-demo19.component';

describe('Lib30Demo19Component', () => {
  let component: Lib30Demo19Component;
  let fixture: ComponentFixture<Lib30Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
