import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo10Component } from './lib64-demo10.component';

describe('Lib64Demo10Component', () => {
  let component: Lib64Demo10Component;
  let fixture: ComponentFixture<Lib64Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
