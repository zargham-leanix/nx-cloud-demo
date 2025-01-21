import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo31Component } from './lib64-demo31.component';

describe('Lib64Demo31Component', () => {
  let component: Lib64Demo31Component;
  let fixture: ComponentFixture<Lib64Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
