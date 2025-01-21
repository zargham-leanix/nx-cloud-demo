import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo26Component } from './lib64-demo26.component';

describe('Lib64Demo26Component', () => {
  let component: Lib64Demo26Component;
  let fixture: ComponentFixture<Lib64Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
