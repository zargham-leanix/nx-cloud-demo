import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo37Component } from './lib23-demo37.component';

describe('Lib23Demo37Component', () => {
  let component: Lib23Demo37Component;
  let fixture: ComponentFixture<Lib23Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
