import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo43Component } from './lib5-demo43.component';

describe('Lib5Demo43Component', () => {
  let component: Lib5Demo43Component;
  let fixture: ComponentFixture<Lib5Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
