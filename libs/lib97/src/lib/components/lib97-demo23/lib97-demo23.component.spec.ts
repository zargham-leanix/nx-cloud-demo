import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo23Component } from './lib97-demo23.component';

describe('Lib97Demo23Component', () => {
  let component: Lib97Demo23Component;
  let fixture: ComponentFixture<Lib97Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
