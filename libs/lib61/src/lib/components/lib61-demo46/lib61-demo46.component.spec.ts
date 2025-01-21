import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo46Component } from './lib61-demo46.component';

describe('Lib61Demo46Component', () => {
  let component: Lib61Demo46Component;
  let fixture: ComponentFixture<Lib61Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
