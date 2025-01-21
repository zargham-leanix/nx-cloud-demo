import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo46Component } from './lib46-demo46.component';

describe('Lib46Demo46Component', () => {
  let component: Lib46Demo46Component;
  let fixture: ComponentFixture<Lib46Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
