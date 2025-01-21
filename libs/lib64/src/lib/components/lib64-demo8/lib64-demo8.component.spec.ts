import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo8Component } from './lib64-demo8.component';

describe('Lib64Demo8Component', () => {
  let component: Lib64Demo8Component;
  let fixture: ComponentFixture<Lib64Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
