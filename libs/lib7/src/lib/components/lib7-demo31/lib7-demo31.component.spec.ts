import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo31Component } from './lib7-demo31.component';

describe('Lib7Demo31Component', () => {
  let component: Lib7Demo31Component;
  let fixture: ComponentFixture<Lib7Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
