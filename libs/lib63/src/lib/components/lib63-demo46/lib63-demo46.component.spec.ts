import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo46Component } from './lib63-demo46.component';

describe('Lib63Demo46Component', () => {
  let component: Lib63Demo46Component;
  let fixture: ComponentFixture<Lib63Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
