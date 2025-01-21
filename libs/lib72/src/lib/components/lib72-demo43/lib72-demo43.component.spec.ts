import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo43Component } from './lib72-demo43.component';

describe('Lib72Demo43Component', () => {
  let component: Lib72Demo43Component;
  let fixture: ComponentFixture<Lib72Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
