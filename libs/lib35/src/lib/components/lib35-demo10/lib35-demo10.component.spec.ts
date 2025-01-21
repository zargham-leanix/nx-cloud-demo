import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo10Component } from './lib35-demo10.component';

describe('Lib35Demo10Component', () => {
  let component: Lib35Demo10Component;
  let fixture: ComponentFixture<Lib35Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
