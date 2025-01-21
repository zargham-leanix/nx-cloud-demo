import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo46Component } from './lib78-demo46.component';

describe('Lib78Demo46Component', () => {
  let component: Lib78Demo46Component;
  let fixture: ComponentFixture<Lib78Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
