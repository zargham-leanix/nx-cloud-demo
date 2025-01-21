import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo27Component } from './lib45-demo27.component';

describe('Lib45Demo27Component', () => {
  let component: Lib45Demo27Component;
  let fixture: ComponentFixture<Lib45Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
