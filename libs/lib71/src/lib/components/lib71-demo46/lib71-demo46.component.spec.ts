import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo46Component } from './lib71-demo46.component';

describe('Lib71Demo46Component', () => {
  let component: Lib71Demo46Component;
  let fixture: ComponentFixture<Lib71Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
