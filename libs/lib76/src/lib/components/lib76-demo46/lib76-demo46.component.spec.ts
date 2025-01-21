import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo46Component } from './lib76-demo46.component';

describe('Lib76Demo46Component', () => {
  let component: Lib76Demo46Component;
  let fixture: ComponentFixture<Lib76Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
