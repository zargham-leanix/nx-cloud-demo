import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo23Component } from './lib14-demo23.component';

describe('Lib14Demo23Component', () => {
  let component: Lib14Demo23Component;
  let fixture: ComponentFixture<Lib14Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
