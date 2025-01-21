import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo23Component } from './lib21-demo23.component';

describe('Lib21Demo23Component', () => {
  let component: Lib21Demo23Component;
  let fixture: ComponentFixture<Lib21Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
