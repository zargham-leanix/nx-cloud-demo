import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo31Component } from './lib54-demo31.component';

describe('Lib54Demo31Component', () => {
  let component: Lib54Demo31Component;
  let fixture: ComponentFixture<Lib54Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
