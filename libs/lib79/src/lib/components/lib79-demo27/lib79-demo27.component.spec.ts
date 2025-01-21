import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo27Component } from './lib79-demo27.component';

describe('Lib79Demo27Component', () => {
  let component: Lib79Demo27Component;
  let fixture: ComponentFixture<Lib79Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
