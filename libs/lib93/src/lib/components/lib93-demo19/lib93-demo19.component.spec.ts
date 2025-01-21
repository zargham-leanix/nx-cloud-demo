import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo19Component } from './lib93-demo19.component';

describe('Lib93Demo19Component', () => {
  let component: Lib93Demo19Component;
  let fixture: ComponentFixture<Lib93Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
