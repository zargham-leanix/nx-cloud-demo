import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo43Component } from './lib27-demo43.component';

describe('Lib27Demo43Component', () => {
  let component: Lib27Demo43Component;
  let fixture: ComponentFixture<Lib27Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
