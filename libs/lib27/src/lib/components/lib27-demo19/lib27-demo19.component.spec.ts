import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo19Component } from './lib27-demo19.component';

describe('Lib27Demo19Component', () => {
  let component: Lib27Demo19Component;
  let fixture: ComponentFixture<Lib27Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
