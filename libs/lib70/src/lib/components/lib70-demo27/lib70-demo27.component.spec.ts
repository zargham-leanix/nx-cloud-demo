import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo27Component } from './lib70-demo27.component';

describe('Lib70Demo27Component', () => {
  let component: Lib70Demo27Component;
  let fixture: ComponentFixture<Lib70Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
