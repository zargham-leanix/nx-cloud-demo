import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo3Component } from './lib89-demo3.component';

describe('Lib89Demo3Component', () => {
  let component: Lib89Demo3Component;
  let fixture: ComponentFixture<Lib89Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
