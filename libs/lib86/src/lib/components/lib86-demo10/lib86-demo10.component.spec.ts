import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo10Component } from './lib86-demo10.component';

describe('Lib86Demo10Component', () => {
  let component: Lib86Demo10Component;
  let fixture: ComponentFixture<Lib86Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
