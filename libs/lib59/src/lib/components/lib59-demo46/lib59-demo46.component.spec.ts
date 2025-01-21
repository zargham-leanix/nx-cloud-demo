import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo46Component } from './lib59-demo46.component';

describe('Lib59Demo46Component', () => {
  let component: Lib59Demo46Component;
  let fixture: ComponentFixture<Lib59Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
