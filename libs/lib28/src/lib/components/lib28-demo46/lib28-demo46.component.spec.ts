import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo46Component } from './lib28-demo46.component';

describe('Lib28Demo46Component', () => {
  let component: Lib28Demo46Component;
  let fixture: ComponentFixture<Lib28Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
