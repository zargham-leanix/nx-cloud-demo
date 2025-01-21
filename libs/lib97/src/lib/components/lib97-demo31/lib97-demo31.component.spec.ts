import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo31Component } from './lib97-demo31.component';

describe('Lib97Demo31Component', () => {
  let component: Lib97Demo31Component;
  let fixture: ComponentFixture<Lib97Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
