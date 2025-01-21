import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo26Component } from './lib76-demo26.component';

describe('Lib76Demo26Component', () => {
  let component: Lib76Demo26Component;
  let fixture: ComponentFixture<Lib76Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
