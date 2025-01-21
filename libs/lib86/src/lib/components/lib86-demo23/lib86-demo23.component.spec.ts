import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo23Component } from './lib86-demo23.component';

describe('Lib86Demo23Component', () => {
  let component: Lib86Demo23Component;
  let fixture: ComponentFixture<Lib86Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
