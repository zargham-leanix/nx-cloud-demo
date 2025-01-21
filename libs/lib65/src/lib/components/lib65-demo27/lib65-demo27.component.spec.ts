import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo27Component } from './lib65-demo27.component';

describe('Lib65Demo27Component', () => {
  let component: Lib65Demo27Component;
  let fixture: ComponentFixture<Lib65Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
