import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo27Component } from './lib51-demo27.component';

describe('Lib51Demo27Component', () => {
  let component: Lib51Demo27Component;
  let fixture: ComponentFixture<Lib51Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
