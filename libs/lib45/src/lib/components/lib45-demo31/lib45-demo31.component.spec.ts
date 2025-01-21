import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo31Component } from './lib45-demo31.component';

describe('Lib45Demo31Component', () => {
  let component: Lib45Demo31Component;
  let fixture: ComponentFixture<Lib45Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
