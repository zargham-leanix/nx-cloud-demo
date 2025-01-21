import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo43Component } from './lib23-demo43.component';

describe('Lib23Demo43Component', () => {
  let component: Lib23Demo43Component;
  let fixture: ComponentFixture<Lib23Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
