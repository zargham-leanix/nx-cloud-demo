import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo23Component } from './lib51-demo23.component';

describe('Lib51Demo23Component', () => {
  let component: Lib51Demo23Component;
  let fixture: ComponentFixture<Lib51Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
