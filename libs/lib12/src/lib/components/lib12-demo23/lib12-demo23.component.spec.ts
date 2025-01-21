import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo23Component } from './lib12-demo23.component';

describe('Lib12Demo23Component', () => {
  let component: Lib12Demo23Component;
  let fixture: ComponentFixture<Lib12Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
