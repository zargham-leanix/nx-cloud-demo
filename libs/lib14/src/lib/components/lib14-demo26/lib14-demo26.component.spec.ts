import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo26Component } from './lib14-demo26.component';

describe('Lib14Demo26Component', () => {
  let component: Lib14Demo26Component;
  let fixture: ComponentFixture<Lib14Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
