import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo47Component } from './lib35-demo47.component';

describe('Lib35Demo47Component', () => {
  let component: Lib35Demo47Component;
  let fixture: ComponentFixture<Lib35Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
