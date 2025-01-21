import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo27Component } from './lib23-demo27.component';

describe('Lib23Demo27Component', () => {
  let component: Lib23Demo27Component;
  let fixture: ComponentFixture<Lib23Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
