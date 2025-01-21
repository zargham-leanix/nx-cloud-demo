import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo8Component } from './lib54-demo8.component';

describe('Lib54Demo8Component', () => {
  let component: Lib54Demo8Component;
  let fixture: ComponentFixture<Lib54Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
