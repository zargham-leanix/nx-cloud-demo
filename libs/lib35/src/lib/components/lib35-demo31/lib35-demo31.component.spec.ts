import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo31Component } from './lib35-demo31.component';

describe('Lib35Demo31Component', () => {
  let component: Lib35Demo31Component;
  let fixture: ComponentFixture<Lib35Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
