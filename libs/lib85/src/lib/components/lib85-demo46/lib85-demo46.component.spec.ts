import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo46Component } from './lib85-demo46.component';

describe('Lib85Demo46Component', () => {
  let component: Lib85Demo46Component;
  let fixture: ComponentFixture<Lib85Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
