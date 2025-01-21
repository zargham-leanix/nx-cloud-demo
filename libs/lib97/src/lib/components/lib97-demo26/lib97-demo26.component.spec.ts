import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo26Component } from './lib97-demo26.component';

describe('Lib97Demo26Component', () => {
  let component: Lib97Demo26Component;
  let fixture: ComponentFixture<Lib97Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
