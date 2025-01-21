import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo8Component } from './lib97-demo8.component';

describe('Lib97Demo8Component', () => {
  let component: Lib97Demo8Component;
  let fixture: ComponentFixture<Lib97Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
