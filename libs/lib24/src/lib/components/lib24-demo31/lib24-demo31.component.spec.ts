import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo31Component } from './lib24-demo31.component';

describe('Lib24Demo31Component', () => {
  let component: Lib24Demo31Component;
  let fixture: ComponentFixture<Lib24Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
