import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo15Component } from './lib97-demo15.component';

describe('Lib97Demo15Component', () => {
  let component: Lib97Demo15Component;
  let fixture: ComponentFixture<Lib97Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
