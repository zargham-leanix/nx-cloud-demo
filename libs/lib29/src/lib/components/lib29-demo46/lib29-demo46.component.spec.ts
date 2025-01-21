import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo46Component } from './lib29-demo46.component';

describe('Lib29Demo46Component', () => {
  let component: Lib29Demo46Component;
  let fixture: ComponentFixture<Lib29Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
