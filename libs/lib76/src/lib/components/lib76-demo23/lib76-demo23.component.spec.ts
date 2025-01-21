import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo23Component } from './lib76-demo23.component';

describe('Lib76Demo23Component', () => {
  let component: Lib76Demo23Component;
  let fixture: ComponentFixture<Lib76Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
