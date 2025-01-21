import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo10Component } from './lib76-demo10.component';

describe('Lib76Demo10Component', () => {
  let component: Lib76Demo10Component;
  let fixture: ComponentFixture<Lib76Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
