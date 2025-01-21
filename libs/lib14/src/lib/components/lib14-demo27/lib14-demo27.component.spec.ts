import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo27Component } from './lib14-demo27.component';

describe('Lib14Demo27Component', () => {
  let component: Lib14Demo27Component;
  let fixture: ComponentFixture<Lib14Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
