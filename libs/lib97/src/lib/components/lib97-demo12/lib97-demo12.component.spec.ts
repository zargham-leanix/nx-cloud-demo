import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo12Component } from './lib97-demo12.component';

describe('Lib97Demo12Component', () => {
  let component: Lib97Demo12Component;
  let fixture: ComponentFixture<Lib97Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
